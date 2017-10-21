$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    // Make request to Github
    $.ajax({
      url: 'https://api.github.com/users/' + username,
      data: {
        client_id: '1f35d877036f4e700e61',
        client_secret: 'de107569b072e4facb774d5304e943125529596c'
      }
    }).done(function(user){
      $('#profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail avatar" src="${user.avatar_url}"/>
                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
              </div>
              <div class="col-md-9">
                <span class="label label-primary">Public Repos: ${user.public_repos}</span>
                <span class="label label-success">Public Gists: ${user.public_gists}</span>
                <span class="label label-info">Following: ${user.following}</span>
                <span class="label label-warning">Followers: ${user.followers}</span>
                <br/><br/>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company == null ? 'Not Available' : user.company}</li>
                  <li class="list-group-item">Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Email: ${user.email}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        `);
    });
  });
});
