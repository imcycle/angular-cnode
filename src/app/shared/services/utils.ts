export const origin = 'https://cnodejs.org/api/v1';

// get /topics 主题首页
export const api_topics = origin + '/topics';

// get /topic/:id 主题详情
export const api_topic_id = origin + '/topic';

// post /topic_collect/collect 收藏主题
export const api_topic_collect = origin + '/topic_collect/collect';

// post /topic_collect/de_collect 取消主题
export const api_topic_de_collect = origin + '/topic_collect/de_collect';

// get /topic_collect/:loginname 用户所收藏的主题
export const api_topic_collects = origin + '/topic_collect';

// get /user/:loginname 用户详情
export const api_user = origin + '/user';

// post /accesstoken 验证 accessToken 的正确性
export const api_accesstoken = origin + '/accesstoken';

// get /message/count 获取未读消息数
export const api_message_count = origin + '/message/count';

// get /messages 获取已读和未读消息
export const api_messages = origin + '/messages';

// post /message/mark_all 标记全部已读
export const api_message_mark_all = origin + '/message/mark_all';

// post /message/mark_one/:msg_id 标记单个消息为已读
export const api_message_mark_one = origin + '/message/mark_one';