require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "Priya-Coder20",
  "id": 212578693,
  "node_id": "U_kgDODKuxhQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/212578693?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Priya-Coder20",
  "html_url": "https://github.com/Priya-Coder20",
  "followers_url": "https://api.github.com/users/Priya-Coder20/followers",
  "following_url": "https://api.github.com/users/Priya-Coder20/following{/other_user}",
  "gists_url": "https://api.github.com/users/Priya-Coder20/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Priya-Coder20/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Priya-Coder20/subscriptions",
  "organizations_url": "https://api.github.com/users/Priya-Coder20/orgs",
  "repos_url": "https://api.github.com/users/Priya-Coder20/repos",
  "events_url": "https://api.github.com/users/Priya-Coder20/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Priya-Coder20/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Priya Shahu",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-05-20T15:42:36Z",
  "updated_at": "2025-09-12T14:56:47Z"
}

app.get('/github', (req,res) =>{
  res.json(githubData)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('ydgjatdg')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Please login here in demo-backend</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})