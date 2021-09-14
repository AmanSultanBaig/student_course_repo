import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Table from './pages/userTable'
import AddUser from './pages/addUser'

function App() {
  return (
    <div className="App">
      <AddUser />
      <Table />
    </div>
  );
}

export default App;
