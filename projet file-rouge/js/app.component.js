class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>   
      {/* Site wrapper */}
      <div className="wrapper">
         

        

          

{/* Content Wrapper. Contains page content */}
        <div className="content-wrapper m-auto">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
              </div>
            </div>{/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            {/* Default box */}
            <div className="card">
              <div className="card-body">
                <CrudProduct />
              </div>
              {/* /.card-body */}

            </div>
            {/* /.card */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}

        {/* Control Sidebar */}

        {/* /.control-sidebar */}
      </div>
                
                

                


            </div>

        )
    }
}