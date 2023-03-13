// import routes from './routes.json'
const routes = require('./routes.json')

let arr = []
let f_path_s = []
let i = 0
function test (routes,childrenlen=0) {
    routes.forEach(ele => {
        if((childrenlen--) > 0){
            console.log(childrenlen,'childrenlen')
        // } else {
        //     f_path = '';
        }
        if(ele.component){
            let path_str = /(^\/)/.test(ele.path) ? ele.path : '/' + ele.path
            f_path_s.push(path_str) 
            console.log(f_path_s,'f_path_s++2')

            arr.push({
                name: ele.meta?.name,
                path: f_path_s.join("")
            })
        }
            f_path_s.pop()
            console.log(f_path_s,'f_path_s--2')
        if(ele.children?.length){
            // if(f_path){
            //     f_path = /(^\/)/.test(ele.path) ? f_path + ele.path : f_path + '/' + ele.path
            // } else {
            //     f_path = ele.path
            // }
            let path_str = /(^\/)/.test(ele.path) ? ele.path : '/' + ele.path
            f_path_s.push(path_str) 
            console.log(f_path_s,'f_path_s++1')
            test(ele.children, ele.children?.length)
        }
        if(childrenlen == 0){
            f_path_s.pop()
            console.log(f_path_s,'f_path_s--1')
        }
    });
}
test(routes)
console.log(arr)


function asd(routes,a){
    if(!a) a="";
    if(routes!=undefined){
        routes.map((item)=>{
            if(item.component!=undefined){
            console.log(a+item.path,'===',item.name,'===',item.component,);
            }
            if(item.children!=undefined){
                    asd(item.children,a)
            }
        })
        
    }
}

// asd(routes)
