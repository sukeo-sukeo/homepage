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
  getBlogListFromIdList: `select 
  b.id as id, b.title, b.created, b.updated, b.summary, bt.thumnail_seo, cate.name as category, group_concat(tag.name) as tags, img.path as thumnail
  from blog b
  left join blog_tag btg on btg.blog_id = b.id
  left join tag on btg.tag_id = tag.id
  left join blog_thumnail bt on b.id = bt.blog_id
  left join blog_category bc on b.id = bc.blog_id
  left join img on bt.img_id = img.id
  left join category cate on bc.category_id = cate.id
  where b.id in (?)
  group by b.id
  order by b.created desc`,
  createSearchQuery: (table, options=null) => {
    let query;

    switch (table) {
      case "blog":
        query = options
          .filter((o) => o === "body" || o === "title" || o === "summary")
          .reduce(
            (prev, curr) => (prev += `${table}.${curr} like concat(?, '%') or `),
            ""
          );
        query = query.substring(0, query.length - 3);
        query = `select id from ${table} where ${query}`;
        break;
      case "category":
        query = `select bc.blog_id from blog_category bc where bc.category_id in (select cate.id from ${table} cate where cate.name like concat(?, '%'))`;
        break;
      case "tag":
        query = `select btg.blog_id from blog_tag btg where btg.tag_id in (select tag.id from ${table} where tag.name like concat(?, '%'))`;
        break;
      default:
        break;
    }

    return query;
  },
};

export { sql };
