const axios = require('axios');

const base_url = 'https://tb-news.herokuapp.com/api';

exports.getArticles = topic => {
  return axios.get(`${base_url}/articles`, { params: { topic } }).then(({ data }) => {
    return data.articles;
  });
};

exports.getTopics = () => {
  return axios.get(`${base_url}/topics`).then(({ data }) => {
    return data.topics;
  });
};

exports.getSingleArticle = article_id => {
  return axios.get(`${base_url}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

exports.getCommentsByArticle = article_id => {
  return axios.get(`${base_url}/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
