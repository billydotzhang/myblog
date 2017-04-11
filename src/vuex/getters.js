/**
 * Created by zhangcheng on 17/4/10.
 */
// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count

export function getCount (state){
    return state.count
}

// export const getCount = status => status.count