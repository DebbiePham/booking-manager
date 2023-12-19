import DoctorCard from './../../components/Doctors/DoctorCard';
import { doctors } from './../../assets/data/doctors';
import Testimonial from "./../../components/Testimonial/Testimonial";

const Doctors = () => {
    return (

        <>

            {/*============ Search bar section ============*/}
            <section className='bg-[#fff9ea]'>
                <div className='container text-center'>
                    <h2 className='heading'>
                        Find a Doctor
                    </h2>
                    <div  className='max-w-[570px] mt-[30px]
                    mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
                        <input type='search' className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none
                        cursor-pointer placeholder:text-textColor' placeholder='Search' />
                        <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
                    </div>
                </div>
            </section>
            {/*============ Search bar section end ============*/}

            <section>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4'>
                    { doctors.map( doctor => ( <DoctorCard key={doctor.id} doctor={doctor} /> ))}
                    </div>
                </div>
            </section>

            
            {/*======== testimonial========= */}
            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">What our customers say</h2>
                        <p className="text__para text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        </p>
                    </div>

                    <Testimonial />
                </div>
            </section>

            {/*======== testimonial end ========= */}

        </>
    );
};

export default Doctors