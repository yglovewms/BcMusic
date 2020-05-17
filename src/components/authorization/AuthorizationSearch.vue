<!--版权查询模块-->
<template>
  <div id="search" style="height: 300px">
    <div style="flex-wrap: wrap;flex-direction: column;width: 100%">
      <!--上面那行字-->
      <div style="font-size: 60px;color: #f9a7a7;justify-content: center">
        <b-icon icon="search" style="margin-top: 20px"></b-icon>
        <div><p style="padding-top: 0px">音乐授权信息查询</p></div>
      </div>

      <!--三个搜索框外加按钮-->
      <!--第一个-->
      <div style="margin-top: 50px;justify-content: space-around;width: 50%;margin-left: 25%">
        <div style="flex-wrap: wrap;">
          <b-input-group>
            <template v-slot:prepend>
              <b-input-group-text style="color: #f9a7a7">名称</b-input-group-text>
            </template>
<!--            <b-form-input></b-form-input>-->
            <input type="text" style="border-radius: 0% 30% 0% 30%"></input>
          </b-input-group>
        </div>
        <!--第二个-->
        <div style="flex-wrap: wrap;">
          <b-input-group>
            <template v-slot:prepend>
              <b-input-group-text style="color: #f9a7a7">作者</b-input-group-text>
            </template>
<!--            <b-form-input></b-form-input>-->
            <input type="text" style="border-radius: 0% 30% 0% 30%"></input>
          </b-input-group>
        </div>

        <!--第三个-->
        <div style="flex-wrap: wrap">
          <b-input-group>
            <template v-slot:prepend>
              <b-input-group-text style="color: #f9a7a7">用户</b-input-group-text>
            </template>
<!--            <b-form-input></b-form-input>-->
            <input type="text" style="border-radius: 0% 30% 0% 30%"></input>
          </b-input-group>
        </div>
        <!--按钮·-->
        <div>
          <b-button pill variant="outline-danger">搜索</b-button>
        </div>
      </div>
      <!--文字-->
      <div style="margin-top: 15px;justify-content: space-around;width: 45%;margin-left: 25%">
        <div>如：晴天</div>
        <div style="margin-left: 20px">如：周杰伦</div>
        <div>如：QQ音乐</div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: "AuthorizationSearch"
  }
</script>

<style scoped>
  *{
    display: flex;
    /*justify-content: center;*/
  }
</style>
