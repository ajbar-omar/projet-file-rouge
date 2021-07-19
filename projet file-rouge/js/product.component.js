class Product extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (

          <ol className="commentlist clearfix">
          <li className="comment byuser comment-author-_smcl_admin even thread-odd thread-alt depth-1" id="li-comment-2">
            <div id="comment-2" className="comment-wrap clearfix">
              <div className="comment-meta">
                <div className="comment-author vcard">
                <button type="button" className="btn btn-danger ml-4 !impotant" onClick={this.props.onClickClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-x-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
                  <span className="comment-avatar clearfix">
                    
                  </span></div>
              </div>
              <div className="comment-content clearfix">
                <div className="comment-author"><a href="https://themeforest.net/user/semicolonweb" rel="external nofollow" className="url">{this.props.product.Name}</a><span><a href="#" title="Permalink to this comment">July 16, 2021 at 10:23 am</a></span></div>
                <p>{this.props.product.Comment}</p>
                <a className="comment-reply-link" href="#"><i className="icon-reply" /></a>
              </div>
              <div className="clear" />
            </div>
          </li>
        </ol>

        )
    }
}