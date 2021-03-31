<template>
  <div>
    <div class="m-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="title">
          <el-input
            :disabled="!isEdit"
            v-model="ruleForm.title"
            placeholder="请输入">
          </el-input>
        </el-form-item>

        <el-form-item label="分类" prop="type">
          <el-select v-model="ruleForm.type">
            <el-option
              v-for="item in types"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容" prop="des">
          <mavon-editor
          class="me-editor"
          ref="md"
          :disabled="!isEdit"
          v-model="ruleForm.des"
          placeholder="请输入"
          >
          </mavon-editor>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"
            @click="save"
            :loading="saveLoading"
            :disabled="saveLoading || !isEdit"
            >立即创建</el-button>
          <el-button type="primary" @click="backFirst"
            >返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor';
import {createArticles} from 'server/userApi.js'
export default {
  name: "BlogAdd",
  components: {
    mavonEditor
  },
  data() {
    return {
      isEdit: this.$route.query.flag === "add" || !this.$route.query.id,
      saveLoading: false,
      types: [{
          label: 'html'
        }, {
          label: 'css'
        }, {
          label: 'js'
        }, {
          label: 'react'
        }, {
          label: 'VueJs'
        }, {
          label: 'java'
        }, {
          label: 'mysql'
        }, {
          label: 'Node'
        }, {
          label: 'game'
        }, {
          label: 'git'
        }, {
          label: 'people'
        }, {
          label: 'uniapp'
        },{
          label: '其它'
        }, {
          label: '书籍'
        }, {
          label: 'admin'
        }, {
          label: 'server'
        }, {
          label: '工具'
        }, {
          label: '闲谈'
        }, {
          label: 'code'
        }],
      ruleForm: {
        id: "",
        title: "",
        des: "",
        type: "",
        img:'',
      },
      rules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          {
            min: 3,
            max: 25,
            message: "长度在 3 到 25 个字符",
            trigger: "blur",
          },
        ],
        types: [{ required: true, message: "请选择分类", trigger: "blur" }],
        content: [{ trequired: true, message: "请输入内容", trigger: "blur" }],
      },
      fileReader: new FileReader(),
    };
  },
  methods: {
    //新建
    save() {
      this.saveLoading = true;
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.saveLoading = false;
          let res = createArticles({data:{title:this.ruleForm.title,type:this.ruleForm.type,des:this.ruleForm.des}})
          //console.log(res)
          //if(res.data === '参数错误!') return this.$message.error('添加文章失败')
          /* 提示信息 */
          return this.$message.success('添加文章成功')
        } else {
          console.log("error submit!!");
          this.saveLoading = false;
          return false;
        }
      });
    },
    //添加图片事件
    imgAdd(pos,$file) {
      let formdata = new Formdata();
      formdata.append('image',$file);
      upload(formdata).then(data => {
        if(data.code == 0) {
          this.$refs.md.$img2Url(pos,data.data.url);
        }else {
          this.$message({
            message:data.msg,
            type:'error',
            showClose:true
          });
        }
      }).catch(err => {
        this.$message({
          message:err,
          type:'error',
          showClose:true
        });
      })
    },
    //返回
    backFirst() {
      this.$router.push('/first')
    }
  },
};
</script>

<style scoped>
.m-content {
  margin: 0 auto;
  text-align: center;
}
.me-editor {
  z-index: 6 !important;
  width: 100%;
  height: 100%;
}
</style>