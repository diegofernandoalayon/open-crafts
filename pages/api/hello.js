// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const usuarios=[
  {name:"user1"},
  {name:"user2"},
  {name: 'user3'},
  {
    name: 'user4'
  },
  {name: 'user5' 
},
]

export default function handler(req, res) {
  res.status(200).json(usuarios)

}
