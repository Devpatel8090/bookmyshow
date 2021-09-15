import { Disclosure } from '@headlessui/react';
import { PreviousMap } from 'postcss';
import{BiChevronDown,BiChevronUp} from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
     
    <Disclosure  >
        {({ open }) => (
          
            <>
            <div className="bg-gray-100 border-lg m-3 rounded-lg p-2">
           
      <Disclosure.Button className="py-2  flex items-center gap-3 ">
        {open ? <BiChevronUp /> : <BiChevronDown />}
        

        <span className={open?"text-red-600" : "text-grey-100"} >
        {props.title}

        </span>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
          <div className="flex flex-wrap items-center gap-3 w-2/3 m-2 mb-4 " >
        {props.tags.map((tag) => (
            <>

            <div className="border-2 border-gray p-2 rounded-lg">

                <span className="text-red-600" >{tag}</span>
                </div>
                
                
            
            </>

        )
        
        
        )}
        </div>
      </Disclosure.Panel>
      </div>
      </>
      
      )}
    </Disclosure>
   
        
  );
};

export default PlaysFilter;