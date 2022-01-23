/**
 * 在主框架内显示
 */
const meta = {
    auth: true
};

const frameIn = [{
        path: '/',
        component: {
            render: (e) => e("router-view") //空组件
        },
        children: [{
                path: '',
                name: 'index',
                component: () => import("@/views/index/index.vue"),
                meta: {
                    ...meta,
                    title: '首页',
                }
            },
         
        ]
    },

];




/**
 * 错误页面
 */

const errorPage = [{
    path: '*',
    name: '404',
    meta: {
        title: '404'
    },
    component: () => import('@/views/error/404/index.vue')
}, ];

// 导出需要显示菜单的
export const frameInRoutes = frameIn;

// 重新组织后导出
export default [
    ...frameIn,
    ...errorPage
];