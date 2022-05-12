import { BrowserRouter, Routes, Route ,Link, Outle } from 'react-router-dom';

<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} >
            <Route path="/invoices" element={<Invoices />} >
                <Route index element={<h2 style={{ padding: '1rem' }}>failed</h2>} ></Route>
                <Route path=":invoiceId" element={<Invoice />} ></Route>
            </Route>
            <Route path="/expenses" element={<Expenses />} ></Route>
            <Route path="*" element={<NotFound />} ></Route>
        </Route>
    </Routes>
</BrowserRouter>

# <BrowserRouter></BrowserRouter> dùng bọc ngoài app

# <Routes> </Routes> bọc duy nhất Route

# <Outlet/> render ra những Route con
vd : đặt <Outlet/> trong trang Home => 
render ra nội dung trang <Login/> or trang <Regiter/> theo url 

# <Route index element={<mặcđịnh/>}></Route> 
nếu url ko dẫn đi dâu khác thì render ra trang mặc định (ở đây url = /invoices )

# <Link to="adu"/> tự động nối url với thẻ <Route/> chứa thẻ cha chứa nó