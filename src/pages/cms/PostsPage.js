import { icons } from '../../utils/icons'
import { Link } from 'react-router-dom'
import { useDeletePostHook, useGetPostsHook } from '../../hooks/post.hook'
import LoadingShimmerList from '../../components/LoadingShimmerList'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { ROUTES } from '../../routes/path'

const PostsPage = () => {
  const { IoIosAddCircleOutline, FaRegTrashAlt, MdModeEdit } = icons
  const filter = { page: 1 }
  const { data: posts, isLoading } = useGetPostsHook({ filter })
  const remove = useDeletePostHook()
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
          <span className='text-xl font-bold'>Bài viết về hoạt động</span>
        </div>
        <div className='flex md:flex-row flex-col justify-between gap-2 text-white'>
          <div className='flex items-center gap-4 mb-4 md:mb-0'>
            <div>
              <input placeholder='Tìm kiếm' type='text' className='focus:border-main-color shadow-md p-2 rounded-md' />
            </div>
          </div>
          <Link to={ROUTES.post.new} className='flex items-center bg-main-color px-4 rounded-xl w-fit'>
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
                <th className='px-3 py-2 text-start w-52'>
                  <span>Tiêu đề</span>
                </th>
                <th className='px-3 py-2 text-start w-52'>
                  <span>Mô tả</span>
                </th>
                <th className='px-3 py-2 text-start w-36'>
                  <span>Ảnh bìa</span>
                </th>
                <th className='px-3 py-2 text-start'>
                  <span>Ngày đăng</span>
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
                </tr> : posts && posts.data.map((post, i) => {
                  return (
                    <tr key={i} className='font-medium text-sm'>
                      <td className='px-3 py-2'>
                        <span>{i + 1}</span>
                      </td>

                      <td className='px-3 py-2'>
                        <span className='w-52 text-ellipsis line-clamp-3'>{post.title}</span>
                      </td>

                      <td className='px-3 py-2'>
                        <span className='w-52 text-ellipsis line-clamp-3'>{post.description}</span>
                      </td>

                      <td className='px-3 py-2'>
                        <div className='w-36 h-44 relative'>
                          <img src={post.cover} alt={post.cover} className='w-full h-full object-cover' />
                        </div>
                      </td>

                      <td className='px-3 py-2'>
                        <span>{post.date}</span>
                      </td>

                      <td className='px-3 py-2'>
                        <div className='flex flex-col sm:flex-row gap-2 w-fit'>
                          <button className='bg-main-color p-3 rounded-lg' title='Xóa' onClick={() => handleDelete(post._id)}>
                            <FaRegTrashAlt size={16} fill='#fff' />
                          </button>

                          <Link to={ROUTES.post.edit(post._id)} className='bg-main-color p-3 rounded-lg' title='Sửa thông tin'>
                            <MdModeEdit size={16} fill='#fff' />
                          </Link>
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

export default PostsPage
