import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import BlogCard from '../Trash/BlogCard';
import BlogCardNew from '../Cards/BlogCardNew';
import blogsArr from '../../content/BlogsInput';

export default function BlogList() {
  return blogsArr.map((blog, index) => (
    <Grow in timeout={1000} key={index}>
      <Grid item xs={12} container>
        <BlogCardNew blogDetails={blog} blogIndex={index} key={blog.id} layoutdirection={index % 2 === 0 ? 'row' : 'row-reverse'}/>
      </Grid>
    </Grow>
  ));
  };