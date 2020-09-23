function getRepoList(handle) {
    console.log(handle);
    console.log(`https://api.github.com/users/${handle}/repos`)
    fetch(`https://api.github.com/users/${handle}/repos`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson,handle))
      .catch(error => alert('Something went wrong. Try again later.'));
}
  
function displayResults(responseJson,handle) {
    console.log(responseJson);
    //display the results section
    $('.results').removeClass('hidden');
    for (i = 0; i < responseJson.length; i++){
        $('ul').append(`<li class="result-entry">${responseJson[i].name}: <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a></li>`)
        console.log(responseJson[i].name)
    }
}
  
function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('ul').empty();
        const handleToSearch = $(event.currentTarget).find('#user-entry').val(); 
        getRepoList(handleToSearch);
    });
}
  
$(function() {
    console.log('App loaded, waiting for submit.');
    watchForm();
});