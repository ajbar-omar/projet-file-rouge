// Application
class CrudProduct extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            productsArray: []
        };
    }
    componentDidMount() {
        this.chargementDonnees();
    }
    chargementDonnees() {

        var productsArray = null;

        // affichage de données par Ajax

        $.getJSON("api/getProduct.php",
            function (data) {
                this.setState({ productsArray: data });
            }.bind(this))
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            });
    }
    //add product
    addproduct(e) {
        $.ajax({
            url: "/api/addProduct.php",
            method: "POST",
            data: {
                Name: ajouterName.value,
                Comment: ajouterComment.value,

            },
            success: function (data) {
                this.chargementDonnees()
                $("#exampleModalCenter").modal('hide');
                console.log(data)
            }.bind(this)
        })
        e.preventDefault();
    }
    // Remove product
    removeproduct(i) {
        $.ajax({
            url: "/api/deleteProduct.php",
            method: "POST",
            data: {
                idcomments: i
            },
            success: function (data) {
                //   $(this).parent().remove();
                this.chargementDonnees()
            }.bind(this)
        })

    }
    //update product
    updateproduct(i) {
        $.ajax({
            url: "api/updateProduct.php",
            method: "POST",
            data: {
                idlocataires: i,
                nom_locataire: editernom_locataire.value,
                numero_locataire: editernumero_locataire.value,


            },
            success: function (data) {
                this.chargementDonnees()
                console.log(data)
            }.bind(this)
        })
        e.preventDefault();
    }






    onChangeInput(e) {
        // this.setState({value: e.target.value})
    }

    render() {
        let productsArray = this.state.productsArray.map((product) => {
            return (
                <Product
                    key={product.idcomments}
                    product={product}
                    onClickClose={this.removeproduct.bind(this, product.idcomments)}
                    onClickUpdate={this.updateproduct.bind(this, product.idcomments)}
                />
            )
        })

        return (
            
           
           <div>
               <header id="header">
        <div id="header-wrap">
          <div className="container">
            <div className="header-row">
              {/* Logo
							============================================= */}
              <div id="logo">
                <a href="index.html" className="standard-logo" data-dark-logo="image/Xoxo.png"><img src="image/Xoxo.svg" alt="Canvas Logo" /></a>
                <a href="index.html" className="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo@2x.png" alt="Canvas Logo" /></a>
              </div>{/* #logo end */}
              <div id="primary-menu-trigger">
                <svg className="svg-trigger" viewBox="0 0 100 100">
                  <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20">
                  </path>
                  <path d="m 30,50 h 40" />
                  <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20">
                  </path>
                </svg>
              </div>
              {/* Primary Navigation
							============================================= */}
              <nav className="primary-menu with-arrows block-mega-menu-4">
                <ul className="menu-container">
                  <li className="menu-item">
                    <a className="menu-link" href="demo-seo.html">
                      <div>Home</div>
                    </a>
                  </li>
                  {/* Mega Menu */}
                  <li className="menu-item"><a className="menu-link" href="demo-seo-faqs.html">
                      <div>Countries</div>
                    </a></li>
                  <li className="menu-item"><a className="menu-link" href="reviews.html">
                      <div>reviews</div>
                    </a></li>
                </ul>
              </nav>{/* #primary-menu end */}
            </div>
          </div>
        </div>
        <div className="header-wrap-clone" />
      </header>

<form id="form-add" className="form-horizontal mt-5" onSubmit={this.addproduct.bind(this)}>
        <div className="col-md-4 form-group">
          <label htmlFor="author">Name</label>
          <input type="text" name="author" id="ajouterName" defaultValue size={22} tabIndex={1} className="sm-form-control" />
        </div>
       
        <div className="w-100" />
        <div className="col-8 form-group">
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="ajouterComment" cols={58} rows={7} tabIndex={4} className="sm-form-control" defaultValue={""} />
        </div>
        <div className="col-8 form-group">
          <button name="submit" type="submit" id="submit-button" tabIndex={5} value="Submit" className="button button-3d m-0">Submit Comment</button>
          
        </div>
      </form>
      
                <div id="comments" class="clearfix">

                        {productsArray}

                </div>

                <footer id="footer" className="dark">
        {/* Copyrights
			============================================= */}
        <div id="copyrights">
          <div className="container">
            <div className="row justify-content-between col-mb-30">
              <div className="col-12 col-lg-auto text-center text-lg-left order-last order-lg-first">
                <img src="image/passlogo.png" alt="Image" className="mb-4 logo2" /><br />
                Copyrights © 2020 All Rights Reserved by Canvas Inc.
              </div>
              <div className="col-12 col-lg-auto text-center text-lg-right">
                <div className="copyrights-menu copyright-links">
                  <a href="#">Home</a>/<a href="#">About</a>/<a href="#">Features</a>/<a href="#">Portfolio</a>/<a href="#">FAQs</a>/<a href="#">Contact</a>
                </div>
                <a href="#" className="social-icon inline-block si-small si-borderless mb-0 si-facebook">
                  <i className="icon-facebook" />
                  <i className="icon-facebook" />
                </a>
                <a href="#" className="social-icon inline-block si-small si-borderless mb-0 si-twitter">
                  <i className="icon-twitter" />
                  <i className="icon-twitter" />
                </a>
                <a href="#" className="social-icon inline-block si-small si-borderless mb-0 si-gplus">
                  <i className="icon-gplus" />
                  <i className="icon-gplus" />
                </a>
                <a href="#" className="social-icon inline-block si-small si-borderless mb-0 si-pinterest">
                  <i className="icon-pinterest" />
                  <i className="icon-pinterest" />
                </a>
                <a href="#" className="social-icon inline-block si-small si-borderless mb-0 si-vimeo">
                  <i className="icon-vimeo" />
                  <i className="icon-vimeo" />
                </a>
                <a href="#" className="social-icon inline-block si-small si-borderless mb-0 si-github">
                  <i className="icon-github" />
                  <i className="icon-github" />
                </a>
                <a href="#" className="social-icon inline-block si-small si-borderless mb-0 si-yahoo">
                  <i className="icon-yahoo" />
                  <i className="icon-yahoo" />
                </a>
                <a href="#" className="social-icon inline-block si-small si-borderless mb-0 si-linkedin">
                  <i className="icon-linkedin" />
                  <i className="icon-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>{/* #copyrights end */}
      </footer>{/* #footer end */}
            </div>
        )
    }
}