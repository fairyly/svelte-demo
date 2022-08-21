<div>book</div>

<div>#/book/123?a=1&b=2 获取参数</div>
<div>{$location}</div>
<div>{$querystring}</div>

<script>
  export let params = {};
  console.log(params); // book/123---> {wild: 123}

  import {location, querystring} from 'svelte-spa-router'
  // 只读的store 要使用 $ 读取
  console.log($location, $querystring)
</script>
