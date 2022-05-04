const sql = {
  getFullData: `select 
  b.id as id, b.title, b.created, b.updated, b.summary, bt.thumnail_seo, cate.name as category, group_concat(tag.name) as tags, img.path as thumnail
  from blog b
  left join blog_tag btg on btg.blog_id = b.id
  left join tag on btg.tag_id = tag.id
  left join blog_thumnail bt on b.id = bt.blog_id
  left join blog_category bc on b.id = bc.blog_id
  left join img on bt.img_id = img.id
  left join category cate on bc.category_id = cate.id
  group by b.id
  order by b.created desc
  limit ?, ?`,
  getFullDataCount: `select count(*) as cnt from blog`,
  getContent: `select 
  b.id as id, b.title, b.body, b.created, b.updated, bt.thumnail_seo, cate.name as category, group_concat(tag.name) as tags, img.path as thumnail
  from blog b
  left join blog_tag btg on btg.blog_id = b.id
  left join tag on btg.tag_id = tag.id
  left join blog_thumnail bt on b.id = bt.blog_id
  left join blog_category bc on b.id = bc.blog_id
  left join img on bt.img_id = img.id
  left join category cate on bc.category_id = cate.id
  where b.id = ?`,
  search_getBlogId: `select
  id from ?? where ??`,
};

export { sql };


// (SELECT b.id
// FROM blog b 
// WHERE b.body LIKE '%捕鯨%' OR b.title LIKE '%捕鯨%' OR b.summary LIKE '%捕鯨%')