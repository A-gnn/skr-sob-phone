import React from 'react'
import '../themes/zhuce.scss';
import App from  './One'

export default  function Zhuce() {
  return (
    <div className='loginn'>
        <div className='titlewarp'>
            <h2 className='sub_title'>
              <span>
                  <span>注册</span>
              </span>
            </h2>
        </div>
        <div>
        
        </div>
       <p className='must'>
           <span>*&nbsp;&nbsp;必填项</span>    
       </p> 
       <div className='coubox'>
           <p>
               <span>如果您注册为会员,您将获得10%的折扣券,可以立即使用</span>
               <span>(每个完成自我认证的账户只能使用一次)</span>
           </p>
       </div>
<div>
  <App/>
</div>
    </div>
  )

 
}
