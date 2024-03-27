import image from "../images/map.jpg"
const user = {
    name: "Joshua Sibanda",
    position: 'Worker',
    imgUrl: image,
    gas: "30%"
}

export default function Profile(){
    return (
        <>
            <main style={{margin:'50px',}}> 
                <div style={{paddingBottom:'10px',paddingTop:'10px',width:'270px', paddingInline:'5px', background:'#64748b', borderRadius:'10px'}}>
                    <div style={{display:'flex', justifyContent:'flex-end', verticalAlign:'middle',marginRight:'5px'}}>
                        <p style={{display:'block', padding:'1px 3px', marginRight:'5px', borderRadius:'5px', background:'#e2e8f0', fontWeight:'bold', fontSize:'10px'}}>Gas | 30%</p>
                        <div className='' style={{height:'10px', width: '10px', background:'red', borderRadius: '50%' }} ></div>
                    </div>
                    <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', marginRight:'3px'}}>
                        <div style={{width:'70px', textAlign:'center'}}>
                            <img
                                className = "avatar"
                                src = {user.imgUrl}
                                style = {{height:'50px', width:'50px', borderRadius:"50%"}}
                            />
                        </div>
                        <div style={{width:'200px', margin:'auto'}}>
                            <h1 style={{fontWeight:'bolder', fontSize:"18px"}}>{user.name}</h1>
                            <span>{user.position}</span>
                        </div>
                    </div>
                </div>
            </main>
            
        </>
    )
}