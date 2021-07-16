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
            <div className="container">

<form id="form-add" className="form-horizontal" onSubmit={this.addproduct.bind(this)}>
        <div className="col-md-4 form-group">
          <label htmlFor="author">Name</label>
          <input type="text" name="author" id="ajouterName" defaultValue size={22} tabIndex={1} className="sm-form-control" />
        </div>
       
        <div className="w-100" />
        <div className="col-12 form-group">
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="ajouterComment" cols={58} rows={7} tabIndex={4} className="sm-form-control" defaultValue={""} />
        </div>
        <div className="col-12 form-group">
          <button name="submit" type="submit" id="submit-button" tabIndex={5} value="Submit" className="button button-3d m-0">Submit Comment</button>
          
        </div>
      </form>
      
                <div id="comments" class="clearfix">

                        {productsArray}

                </div>
            </div>
        )
    }
}