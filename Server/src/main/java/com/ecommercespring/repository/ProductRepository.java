package com.ecommercespring.repository;

import com.ecommercespring.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    public List<Product> filterProducts(@Param("category")String category,
                                        @Param("minPrice")Integer minPrice,
                                        @Param("maxPrice")Integer maxPrice,
                                        @Param("minDiscount")Integer minDiscount,
                                        @Param("pageNumber") Integer pageNumber,
                                        @Param("pageSize") Integer pageSize,
                                        @Param("sizes") String sizes,
                                        @Param("colors") String colors,
                                        @Param("sort") String sort


                                        );
}
