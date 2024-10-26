import { useEffect, useState } from "react";
import CategoryLists from "../database/categories.json";
import ReactPaginate from "react-paginate";
import { FaAnglesLeft , FaAnglesRight} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../redux/slices/categorySlice";

type Category = string;

const Categories = () => {
  const isCategoryMarked = useSelector((state: any) => state.category.categories)
  const dispatch = useDispatch();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItems, setCurrentItems] = useState<Category[]>([]);

  useEffect(() => {
    const offset = currentPage * itemsPerPage;
    setCurrentItems(CategoryLists.slice(offset, offset + itemsPerPage));
  }, [currentPage]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const handleCategoryClick = (category: Category) =>{
    dispatch(addCategory(category))
  }

  return (
    <div className="w-full flex py-8 justify-center">
      <div className="border rounded-xl w-[30rem] py-4 px-8">
        <h1 className="font-bold text-2xl mb-4 text-center">
          Please mark your interests!
        </h1>
        <p className="font-semibold text-lg text-center">
          We will keep you notified.
        </p>
        <div className="h-[1px] border"></div>
        <p className="mt-4 font-semibold">My saved interests!</p>
        
        {currentItems.length > 0 &&
          currentItems.map((cat) => (
            <div key={cat} className="mt-2 flex gap-2" onClick={()=> handleCategoryClick(cat)}>
              <input type="checkbox" defaultChecked={isCategoryMarked.includes(cat)} id={cat} />
              <label htmlFor={cat}>{cat}</label>
            </div>
          ))}
        
        <ReactPaginate
          previousLabel={<FaAnglesLeft />}
          nextLabel={<FaAnglesRight />}
          breakLabel={"..."}
          pageCount={Math.ceil(CategoryLists.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-center gap-2 mt-4"}
          activeClassName={"active font-bold text-blue-600"}
          pageClassName={"page-item px-2"}
          pageLinkClassName={"page-link"}
          previousClassName={"previous-page"}
          nextClassName={"next-page"}
        />
      </div>
    </div>
  );
};

export default Categories;
