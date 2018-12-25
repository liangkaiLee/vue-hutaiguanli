<template>
    <div class="users-container">
        <template>
            <el-table
            :data="users"
            stripe
            border>
            <el-table-column
                prop="id"
                label="编号"
                width="180" align="center">
            </el-table-column>
            <el-table-column
                prop="username"
                label="用户名"
                width="180" align="center">
            </el-table-column>
            <el-table-column
                prop="role_name"
                label="角色" align="center">
            </el-table-column>
            <el-table-column label="状态"  align="center">
                <template slot-scope="scope">
                    <el-button :type="scope.row.msg_state ? 'success' : 'danger'" size="small">{{ scope.row.msg_state ? '已启用' : '已禁用'  }}</el-button>
                </template>
            </el-table-column>
            </el-table>
        </template>

    </div>
</template>

<script>
    import { users } from '../../../api'

    export default {
        data() {
            return {
                users: [],
            }
        },

        created() {
            this.getUsers();
        },

        methods: {
            getUsers() {
                // let token = localStorage.getItem('token')
                // axios.get('http://127.0.0.1:8888/api/private/v1/users', {
                //     headers: {'Authorization': token},
                //     params: {
                //         pagenum: '1',
                //         pagesize: '10',
                //     }
                // })
                users(1, 10)
                .then(res => {
                    // console.log(res)
                    if(res.data.meta.status === 200) {
                        this.users = res.data.data.users
                    }
                })
            },

            // handleEdit(index, row) {
            //     console.log(index, row)
            // }
        },
    }
</script>

<style lang="less">
    .users-container {
        .el-table {
            width: 800px;
            margin: 20px auto;
        }
    }
</style>

