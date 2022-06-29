// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const usuarios={
  name:"user1"
}

export default function handler(req, res) {
  res.status(200).json(usuarios)

}
