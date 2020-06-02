import request from "./index"

// 文章列表api

const urlApi = {
    getListArticle: '/article/get_list_article' // 过去文章列表
}

export default  {
    getListArticle () {
        return request.get(urlApi.getListArticle)
    }
}