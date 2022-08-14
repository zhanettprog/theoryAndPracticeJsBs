const post = {
    title: 'My post',
    likesQty: 5
}
undefined
post
{title: 'My post', likesQty: 5}
JSON.stringify(post);
'{"title":"My post","likesQty":5}'
const postStringified = JSON.stringify(post)
undefined
JSON.parse(postStringified)
{title: 'My post', likesQty: 5}
likesQty: 5
title: "My post"
[[Prototype]]: Object