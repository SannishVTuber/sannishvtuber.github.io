
var url = "https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=sannish.bsky.social";

// var pinned = "";

function make_url(uri)
{
    return "https://public.api.bsky.app/xrpc/app.bsky.feed.getPosts?uris=" + uri;
}

function make_html(post)
{

    post_url = "https://bsky.app/profile/sannish.bsky.social/post/" + post.uri.split("/app.bsky.feed.post/")[1];
    schedule.innerHTML += '<a href=\"' + post_url + '\">' + 
        '<img width=100% src=\"' + post.embed.images[0].thumb+ '\"</img>' +
        '</a>';
}

fetch(url)
.then(res => res.json())
.then(out => {
    // console.log('Checkout this JSON! ', out);

    fetch(make_url(out.pinnedPost.uri))
    .then(res => res.json())
    .then(out => {
        make_html(out.posts[0])
        // console.log('Checkout this Pin! ', out.posts[0]);
        // schedule.innerHTML += '<img width=100% src=\"' + out.posts[0].embed.images[0].thumb+ '\"</img>';
    }
    )
    .catch(err => console.log(err));
}
)
.catch(err => console.log(err));



