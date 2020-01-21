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

exports.patchCommentVotes = (comment_id, newVote) => {
  return axios.patch(`${base_url}/comments/${comment_id}`, {inc_votes: newVote}).then(({data}) => {
    console.log(data);
    
    return data
  })
}
