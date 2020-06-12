import request from "./index"

// 文章列表api

const articleUrlApi = {
    getArticleList: '/article/get_article_list' // 获取文章列表
}

const articleOtherApi = {
    getArticleType: '/article/get_article_type' // 文章类型列表
}

export default  {
    getArticleList (params) {
        return request.get(articleUrlApi.getArticleList, params)
    },
    getArticleType () {
        return request.get(articleOtherApi.getArticleType)
    }
}