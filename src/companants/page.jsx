import { useEffect, useState } from "react"
export default function Demo(){
  const [pages,setPages]=useState( [{page:"Page 1",value:false} ,{page:"Page 2",alue:false}, {page:"Page 3",alue:false}, {page:"Page 4",alue:false}])
  const [checkAll,setCheckAll] = useState(false)
  const check_all = (value) =>{
    setPages(pages.map((v) => ({ ...v, value })));
  }
  const singleCheck = (value,index) =>{
    setPages([...pages.slice(0,index),{...pages[index],value:value},...pages.slice(index+1)])
  }
  useEffect(() => {
    setCheckAll(pages.every((dt) => dt.value));
}, [pages]);


  return (
    <div className="page-selection-container">
      <div className="page-selection-item">
        <span className="page-label">All pages</span>
        <input type="checkbox"  className="page-checkbox" checked={checkAll} onChange={()=>check_all(checkAll ? false : true)}/>
      </div>
      <div className="page-divider"></div>
      {pages.map((page, index) => (
        <div key={index} className="page-selection-item">
          <span className="page-label">{page.page}</span>
          <input
            type="checkbox"
            className="page-checkbox"
            checked={page.value}
            onChange={()=>singleCheck(page.value ? false : true,index)}
          />
        </div>
      ))}
      <div className="page-divider"></div>
      <button className="done-button">
        Done
      </button>
    </div>
  )
}

