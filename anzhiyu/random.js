var posts=["2024/06/01/Linux 命令2/","2024/06/01/hard_socnet2/","2024/06/01/php面向对象/","2023/07/29/Linux 应急响应/","2024/06/01/prime靶场/","2023/07/31/vm/","2024/06/01/west-wild v-0.1/","2023/07/31/跟我一起打靶 2/","2024/06/01/跟我一起打靶 1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };