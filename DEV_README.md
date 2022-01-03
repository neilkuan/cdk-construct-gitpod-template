### 在開始開發 `CDK Custom Construct Library` 請先把 [package.json](./package.json) 裡的預設值改掉。

[`package.json`](./package.json)
- [ ] name: 請將 `@github-username/github-project-name` , 改成 `@你的github username/github-project-name` ex: @github-username/cdk-construct-gitpod-template -> @neilkuan/cdk-construct-project
- [ ] author.name: 請將 `Your Name` 改成你的 Your Name
- [ ] author.email: 請將 `your_email@email.com` 改成你的 EMail Address
- [ ] repository.url: 請將 `github-username/cdk-construct-gitpod-template`, 改成 `你的github username/github-project-name` ex: github-username/cdk-construct-gitpod-template -> neilkuan/cdk-construct-project

![EXAMPLE](https://img.shields.io/badge/-This_final_example_package.json-white)
```bash
{
  "name": "@neilkuan/cdk-construct-project",
  ...,
  "description": "A CDK construct library",
  "author": {
    "name": "Neil Kuan",
    "email": "neilkaun@email.com",
    "organization": false
  },
  "repository": {
    "url": "https://github.com/neilkuan/cdk-construct-project.git"
  },
}

```