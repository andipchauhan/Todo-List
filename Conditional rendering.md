<div className="todos flex flex-col gap-2 p-3">
          {Todos.length===0 ?(<div className='text-2xl m-auto'>Nothing here! Let's plan your day</div>):(
                  <>
                  <h1 className='text-lg font-bold'>Your Tasks</h1>
                    {Todos.map(item=>{
          
                     return <div key={item.id} className="todo flex justify-between bg-blue-300 rounded-md p-2">
                      <div className='flex gap-2'>
                      <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
                      <div className={item.isCompleted?"line-through":""} >
                        {item.Todo}
                      </div>
                      </div>
                      <div className="buttons">
                        <button onClick={handleEdit} className='bg-blue-300 text-sm font-semibold p-1 px-2 rounded-lg mx-1 hover:bg-blue-400 transition-all duration-200'>Edit</button>
                        <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-blue-300 text-sm font-semibold p-1 px-2 rounded-lg mx-1 hover:bg-blue-400 transition-all duration-200'>Delete</button>
                      </div>
                    </div>
                })}
                </>
          )}
        </div>