---
sidebar_position: 7
---

## DevOps 流水线系统
- 资料来源：[Building a serverless DevOps pipeline for Salesforce with Cloud Build](https://cloud.google.com/architecture/building-a-serverless-devops-pipeline-for-salesforce)
- 使用场景：建立高效的 CI/CD 流程

![building-a-serverless-devops-pipeline-for-salesforce-architecture](/img/system/building-a-serverless-devops-pipeline-for-salesforce-architecture.svg)

1. 开发者针对正在开发的功能在 GitHub 中创建功能分支。
2. 开发者在 Salesforce 暂存组织中完成开发工作并运行单元测试。
3. 开发者提交开发工作并推送到其源代码库（在本教程中为 GitHub）。
4. 开发者创建拉取请求以将其工作合并到版本分支中。
5. 创建拉取请求会自动触发 Cloud Build 作业以运行测试。
6. 负责人员（通常是团队负责人）审核并批准拉取请求，以将开发工作合并到版本分支中。
7. 与版本分支的合并会自动触发 Cloud Build 作业，以将代码库部署到 QA 或其他 Salesforce 环境。
8. （可选）在 QA 环境中执行手动测试和审核。
9. 负责人员创建拉取请求以将代码合并到 main 分支。
10. 向 main 分支发出的拉取请求触发 Cloud Build 作业，将代码部署到生产环境。

![building-a-serverless-devops-pipeline-for-salesforce-branching-strategy](/img/system/building-a-serverless-devops-pipeline-for-salesforce-branching-strategy.svg)

如图所示，分支策略包括以下部分：

1. 一个主分支。主分支中的代码反映了在生产环境中运行的代码的当前版本。
2. 一个版本分支。版本分支是相对更长期有效的分支（与功能分支相比），它协调与某个版本相关的所有更改和代码。组织会为每个新版本创建新的版本分支。
3. 一个或多个功能分支。功能分支有助于将进行中的工作与主分支中最新版本的代码隔离开来。通常，多个功能分支构成一个版本分支。开发者创建用于问题修复的功能分支是一种良好的做法。

开发者克隆项目代码库后，会在本地机器上或 Salesforce 暂存组织中进行开发。他们可以使用暂存组织针对所做的更改进行单元测试。如果单元测试通过，开发者提交代码并推送到源代码库。然后，他们生成拉取请求，以便将其代码合并到父版本分支中。

拉取请求会自动触发执行以下操作的 Cloud Build 作业：
- 创建一个新的暂存组织来运行单元测试。
- 使用测试结果更新拉取请求。

此时，团队负责人和产品负责人可以审核拉取请求。如果请求获得批准，更改会合并到版本分支中。
