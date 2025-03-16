import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useSEO } from '../hooks/seo'
// import { useDispatch, useSelector } from 'react-redux'
// import { isScrollTop } from '../store/actions/home_actions'

const PublicPage = () => {
  //   const { showSideBarRight, scrollTop } = useSelector(state => state.app)
  //   const location = useLocation()
  //   const dispatch = useDispatch()

  //   const handleScrollTop = e => {
  //     if (
  //       location.pathname.includes('/artist') ||
  //       location.pathname.includes('/zing-chart')
  //     ) {
  //       if (e.target.scrollTop === 0) dispatch(isScrollTop(true))
  //       else dispatch(isScrollTop(false))
  //     } else {
  //       dispatch(isScrollTop(false))
  //     }
  //   }
  useSEO({
    title: "Nhóm Ánh sáng từ thiện - Nơi tình thương toả sáng",
    description: "Trang website ghi lại các hoạt động tình nguyện của các nhà hảo tâm và nhóm Ánh sáng từ thiện được thành lập từ năm 2010",
    keywords: ["Ánh sáng từ thiện", "Từ thiện", "Cháo tình thương", "Chương trình thường niên", "Hỗ trợ hoàn cảnh", "Tiếp sức tri thức"],
  })

  return (
    <>
      <div className='w-full h-screen overflow-hidden'>
        <div className='h-full overflow-hidden'>
          <div className='flex flex-col h-full overflow-hidden'>
            <Header />
            <div className='flex-auto overflow-y-auto overflow-x-hidden'>
              <div className='max-w-screen-xl mx-auto px-3 lg:px-0'>
                <Outlet />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default PublicPage
