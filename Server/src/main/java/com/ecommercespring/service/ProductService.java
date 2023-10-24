package com.ecommercespring.service;

import com.ecommercespring.Exception.ProductException;
import com.ecommercespring.model.Product;
import com.ecommercespring.request.createProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {

    public Product createProduct(createProductRequest req);

    public  String DeleteProduct(Long product) throws ProductException;

    public  Product updateProduct (long productId,Product product) throws  ProductException;

    public Product findProductById(long id)throws ProductException;

    public  List<Product>findProductByCategory(String category);

    public Page<Product>getAllProduct(String category ,List<String>colors,List<String>sizes,Integer minPrice,Integer maxPrice,

    Integer minDiscount,String sort,String stock,Integer pageNumber, Integer pageSize);















}
