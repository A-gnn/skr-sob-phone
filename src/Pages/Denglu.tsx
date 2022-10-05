import React, { useEffect, useRef } from 'react'
import '../themes/denglu.scss'
import {Link,Route,Routes} from 'react-router-dom'
import Login from '../Pagess/Zhuce'


export default function Denglu() {
      const ref:any=useRef(null)
      const ref1:any=useRef(null)
      const update=()=>{
          let word=ref.current.value
          let reg=/^[\u4E00-\u9FA5]+$/;
          if(!reg.test(word)){
              alert("用户名只能是汉字")
                
          }
          let word1=ref1.current.value
          let reg1= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
          if(!reg1.test(word1)){
              alert("至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符")
                console.log("555");
                
          }
      }

    return (
      <div className='login'>
        <div className='titlewarp'>
            <h2 className='sub_title'>
              <span>
                  <span>登录</span>
              </span>
            </h2>
        </div>
{
    
}
        <div className='memberJoin'>
            <div className='joincontent'>
                <div className='loginwarp'>
                  <form action="">
                      <div className='inpGroup'>
                          <p>
                              <label htmlFor="user" className='onelabel' >用户名</label>
                              <input type="text" id='username' placeholder='请输入您的用户名' ref={ref}/>
                          </p><br />
                          <p>
                              <label htmlFor="password" className='twolabel'>密码</label>
                              <input type="text" id='password' placeholder='请输入您的密码' ref={ref1}/>
                          </p>
                          <span className='spantwo'>
                              <img src="" alt="" />
                              <input type="checkbox" className='changebtn'/>
                              <img src="" alt="" />
                              <label htmlFor="" className='labelone'>记住账号</label>
                          </span>
                          <div className='warning'>
                               <span className='onespan'>用户名不能为空</span>
                               <span className='twospan'>密码不能为空</span>
                          </div>
                      </div>
                      <div className='btnGroup'>
                          <a href="https://www.baidu.com"><button className='loginbtn'  onClick={()=>update()} >登录</button></a>
                          <ul className='link'>
                              <li><a href="">找回用户名</a></li>|
                              <li><a href="">忘记密码</a></li>
                          </ul>
                      </div>
                      </form>  
                </div>
              <div className='thirdparty'>
                  <h3>第三方登录</h3>
                  <ul>
                      <li><img src="" alt="" /> <a href="">QQ</a></li>
                      <li> <img src="" alt="" /><a href="">微信</a></li>
                  </ul>
              </div>
            
               <div className='nonmember'>
                   <ul>
                       <li>
                           <p>
                               <span>还不是SKR-SHOP成员?</span><br />
                               <span>如果您注册成为会员，您将获得10%的折扣券</span>
                           </p>
                           <Link to="/login"><button>注册</button></Link>
                       </li>
                       {/* <Routes>
                            <Route path='login' element={<Login/>}/>
                       </Routes> */}
                       <li>
                           <p>
                               <span>需要非会员订单/交货查询吗</span><br />
                           </p>
                           <button>非会员订单查询</button>
                       </li>
                   </ul>
               </div>
                

            </div>
        </div>
      
      </div>

    
    )
  }