package com.ecommercespring.request;

import com.ecommercespring.model.Size;

import java.util.HashSet;
import java.util.Set;

public class createProductRequest {

     private String title;
     private String description;

     private String price;

     private String discountedPrice;

     private String discountPresent;

     private String quantity;
     
     private  String Brand;

     private  String color;
     
     private Set<Size> size = new HashSet<>();
     
     private String imageUrl;

     private String topLevelCategory;
     private String topSecondCategory;

    private String topThridCategory;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(String discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public String getDiscountPresent() {
        return discountPresent;
    }

    public void setDiscountPresent(String discountPresent) {
        this.discountPresent = discountPresent;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getBrand() {
        return Brand;
    }

    public void setBrand(String brand) {
        Brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Set<Size> getSize() {
        return size;
    }

    public void setSize(Set<Size> size) {
        this.size = size;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getTopLevelCategory() {
        return topLevelCategory;
    }

    public void setTopLevelCategory(String topLevelCategory) {
        this.topLevelCategory = topLevelCategory;
    }

    public String getTopSecondCategory() {
        return topSecondCategory;
    }

    public void setTopSecondCategory(String topSecondCategory) {
        this.topSecondCategory = topSecondCategory;
    }

    public String getTopThridCategory() {
        return topThridCategory;
    }

    public void setTopThridCategory(String topThridCategory) {
        this.topThridCategory = topThridCategory;
    }

    public createProductRequest(String title, String description, String price, String discountedPrice, String discountPresent, String quantity, String brand, String color, Set<Size> size, String imageUrl, String topLevelCategory, String topSecondCategory, String topThridCategory) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountedPrice = discountedPrice;
        this.discountPresent = discountPresent;
        this.quantity = quantity;
        Brand = brand;
        this.color = color;
        this.size = size;
        this.imageUrl = imageUrl;
        this.topLevelCategory = topLevelCategory;
        this.topSecondCategory = topSecondCategory;
        this.topThridCategory = topThridCategory;
    }
}
