<template>
  <div id="edit">
    <el-row>
      <quill-editor
          v-model="content"
          :options="editorOption"
          ref="quillEditorNode"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
      >
      </quill-editor>
    </el-row>
    <div class="content" ref="quillContent"></div>
  </div>
</template>

<script>
  import { quillEditor, Quill } from 'vue-quill-editor'
  import ImageResize from 'quill-image-resize-module'
  import options from '@/assets/js/initQuill.js'
  Quill.register('modules/imageResize', ImageResize)
  export default {
      name: "EditerQuill",
      data:function(){
          return{
              content:'',
              editorOption: {}
          }
      },
      created() {
          this.editorOption = options
          // console.log(options)
      },
      methods:{
          onEditorBlur(editor){//失去焦点事件
              this.$refs.quillContent.innerHTML = `<div  class="ql-container ql-snow"><div class="ql-editor" v-html="content">${this.content}</div></div>`
              console.log(editor)
          },
          onEditorFocus(editor){//获得焦点事件
              console.log(editor)
          },
          onEditorChange({editor,html,text}){//编辑器文本发生变化
              //this.content可以实时获取到当前编辑器内的文本内容
              console.log({editor,html,text});
          }
      },
      computed: {
      },
      components: {
          quillEditor
      }
  }
</script>

<style scoped>
  .content {
    margin-top: 30px;
  }
</style>