import React from 'react'
import { user_data } from '../data/User_data';


const PaginatedContent = ({currentData}) => {
    return <table className='w-full mt-10 '>
    <tbody>
    {
       user_data.map((item, index) =>
        <tr className='w-full h-[4rem] text-[16px] justify-start align-bottom border-b-2 border-[#005232]' key={index} >
            <td className='text-[#2f5284] w-1/3'>{`${item.Data.first_name} ${item.Data.last_name}`}</td>
            <td className='text-[#2f5284] w-1/3'>{`${item.Data.Phone_number}`}</td>
            <td className='text-[#2f5284] w-1/3'>{`${item.Data.center}`}</td>
            <td className='text-[#2f5284] w-1/3'>{`${item.Data.Name_of_resident_pastor}`}</td>
        </tr>
       )
   }
    </tbody>
</table>
}

const PaginationComponent = ({numberOfPages, current_page, set_current_page}) => {

    const page_number = Array.from(Array(numberOfPages + 1).keys()).slice(1);

    const next_page = () => {
        if(current_page !== numberOfPages){
            set_current_page(current_page +1)
        }
    }

    const previous_page = () => {
        if(current_page !== 1) {
            set_current_page(current_page -1)
        }
    }

    return <nav>
          {/* navigation buttons */}
        <div className='flex flex-row justify-between mt-4'>
            {/* back button */}
            <button 
                className='w-[8.2rem] h-[3.75rem] rounded-[0.9rem] italic bg-[#F2FAF7] text-[#005232]'
                onClick={previous_page}
            >Back
            </button>

           {/* page buttons */}
            {
                page_number.map(index => 
                    <button key={index} onClick={() => set_current_page(index)} 
                        className={`${current_page === index ? 'w-[8.2rem] h-[3.75rem] rounded-[0.9rem] italic bg-[#F2FAF7] text-[#005232]' : ""}`}
                    >
                        {index}
                    </button>
                )
            
            }
            {/* next button */}
            <button 
                className='w-[8.2rem] h-[3.75rem] rounded-[0.9rem] italic bg-[#F2FAF7] text-[#005232]'
                onClick={next_page}
            >Next</button>
        </div>
    </nav>
    
}

const user_dashboard = () => {
    
    const [ DATA_PER_PAGE] = useState(6)
    const [companyData, setCompanyData] = useState([]);
    const [current_page_no, set_current_page] = useState(1);

    const number_of_pages = Math.ceil(CompanyData.length / DATA_PER_PAGE)
    const last_record_index = current_page_no * DATA_PER_PAGE;
    const first_record_index = last_record_index - DATA_PER_PAGE;
    const current_data = user_data.slice(first_record_index, last_record_index);
  return (
    <div>
        {programs.programs_Data.map((items, index) =>
            <Navlink>
                {items.title}
            </Navlink>
        )}
    </div>
    
  )
}

export default user_dashboard