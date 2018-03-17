SELECT url.author, url.short_url, url.orig_url, users.auth_id, users.f_name, users.l_name
FROM url
INNER JOIN users ON url.author=users.uniq_user_id
WHERE url.author = $1