import { Link } from "react-router-dom"
import { useDeleteBannerHook, useGetBannersHook } from "../../hooks/banner.hook"
import { icons } from "../../utils/icons"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import LoadingShimmerList from "../../components/LoadingShimmerList"
import { ROUTES } from "../../routes/path"

const BannersPage = () => {
    const { FaRegShareSquare, IoIosAddCircleOutline, FaRegTrashAlt, MdModeEdit } = icons
    const { data: banners, isLoading } = useGetBannersHook()
    const remove = useDeleteBannerHook()
    const dummy = []
    for (let i = 0; i <= 100; i++) {
        dummy.push(i)
    }

    const handleDelete = (id) => {
        withReactContent(Swal).fire({
            title: 'Bạn có chắc chắn không?',
            text: 'Bạn sẽ không thể đảo ngược hành động',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy'
        }).then(result => {
            if (result.isConfirmed) remove.mutate({ id })
        })
    }

    return (
        <div className='bg-white rounded-md p-4'>
            <div className='space-y-4'>
                <div className='w-full'>
                    <span className='text-xl font-bold'>Ảnh banner</span>
                </div>
                <div className='flex md:flex-row flex-col justify-between gap-2 text-white'>
                    <div className='flex items-center gap-4 mb-4 md:mb-0'>
                        <div>
                            <input placeholder='Tìm kiếm' type='text' className='focus:border-main-color shadow-md p-2 rounded-md' />
                        </div>
                    </div>
                    <Link to={ROUTES.banner.new} className='flex items-center bg-main-color px-4 rounded-xl w-fit'>
                        <IoIosAddCircleOutline size={20} />
                        <span className='pl-2'>Thêm mới</span>
                    </Link>
                </div>
                <div className='shadow-lg rounded-lg overflow-hidden'>
                    <table className='w-full'>
                        <thead>
                            <tr className='text-sm text-gray-500 uppercase border-b bg-gray-100'>
                                <th className='px-3 py-2 text-start'>
                                    <span>STT</span>
                                </th>
                                <th className='px-3 py-2 text-start'>
                                    <span>Thứ tự</span>
                                </th>
                                <th className='px-3 py-2 text-start w-60'>
                                    <span>Ảnh bìa</span>
                                </th>
                                <th className='px-3 py-2 text-start'>
                                    <span>Hành động</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody className='bg-white divide-y divide-gray-200'>
                            {isLoading ?
                                <tr>
                                    <td colSpan={7}>
                                        <div className='p-3'>
                                            <LoadingShimmerList />
                                        </div>
                                    </td>
                                </tr> : banners && banners.data.map((banner, i) => {
                                    return (
                                        <tr key={i} className='font-medium text-sm'>
                                            <td className='px-3 py-2'>
                                                <span>{i}</span>
                                            </td>

                                            <td className='px-3 py-2'>
                                                <span>{banner.order}</span>
                                            </td>

                                            <td className='px-3 py-2'>
                                                <div className='aspect-video relative'>
                                                    <img src={banner.image} alt={banner.image} className='w-full h-full object-cover' />
                                                </div>
                                            </td>

                                            <td className='px-3 py-2'>
                                                <div className='flex flex-col sm:flex-row gap-2 w-fit'>
                                                    <button className='bg-main-color p-3 rounded-lg' title='Xóa' onClick={() => handleDelete(banner._id)}>
                                                        <FaRegTrashAlt size={16} fill='#fff' />
                                                    </button>

                                                    <button className='bg-main-color p-3 rounded-lg' title='Sửa thông tin'>
                                                        <MdModeEdit size={16} fill='#fff' />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {/* Phan trang */}
            </div>
        </div >
    )
}

export default BannersPage