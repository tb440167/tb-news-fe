const axios = require('axios');

const base_url = 'https://tb-news.herokuapp.com/api';

exports.getArticles = (topic, sort_by, order) => {
  return axios.get(`${base_url}/articles`, { params: { topic, sort_by, order } }).then(({ data }) => {
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

exports.postNewComment = (article_id, username, body) => {
  return axios.post(`${base_url}/articles/${article_id}/comments`, { username, body }).then(({ data }) => {
    return data.comment;
  });
};

exports.patchCommentVotes = (id, newVote, type) => {
  return axios.patch(`${base_url}/${type}/${id}`, { inc_votes: newVote }).then(({ data }) => {
    return data;
  });
};

exports.deleteComment = id => {
  return axios.delete(`${base_url}/comments/${id}`).then(({ data }) => {
    return data;
  });
};

exports.parseDate = date_string => {
  return new Date(Date.parse(date_string));
};
