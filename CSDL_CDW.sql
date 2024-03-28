CREATE DATABASE banbanhkem_cdw;
use banbanhkem_cdw;
-- --
/*==============================typeOfCake=====================================*/
create table TYPEOFCAKE(ID INT NOT NULL AUTO_INCREMENT PRIMARY key, NAME varchar(40), STATUS int);
-- --
INSERT INTO TYPEOFCAKE(NAME, STATUS) VALUES ('Bánh hoa', 1);
INSERT INTO TYPEOFCAKE(NAME, STATUS) VALUES ('Bánh trang trí con thú', 1);
INSERT INTO TYPEOFCAKE(NAME, STATUS) VALUES ('Bánh trái cây', 1);
INSERT INTO TYPEOFCAKE(NAME, STATUS) VALUES ('Bánh nhân vật hoạt hình', 1);
INSERT INTO TYPEOFCAKE(NAME, STATUS) VALUES ('Bánh hoa mousse', 1);
INSERT INTO TYPEOFCAKE(NAME, STATUS) VALUES ('Bánh maccaron và socola', 1);
INSERT INTO TYPEOFCAKE(NAME, STATUS) VALUES ('Bánh hình lạ mắt', 1);
INSERT INTO TYPEOFCAKE(NAME, STATUS) VALUES ('Bánh trang trí đơn giản', 1);

/*==============================PRODUCTS=====================================*/
create table PRODUCTS( ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, ID_TYPE INT, NAME LONGTEXT,
                      SIZE varchar(10), WEIGHT int, DESCRIPTION longtext, INTRODUCTION longtext, PRICE float, STATUS tinyint(4) DEFAULT 0,
                      CONSTRAINT f_mlb FOREIGN KEY(ID_TYPE) REFERENCES TYPEOFCAKE(ID));
-- --
-- --
INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS)
 VALUES ( 1 ,'Bánh cánh đồng hoa', 'Vừa', 500,
                             "Bánh kem phong cách hoa Hàn Quốc, ngon và đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 450000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 , 'Bánh hoa hồng kem dâu tây', 'Vừa', 500,"Bánh kem phong cách hoa Hàn Quốc, ngon và đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 450000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 , 'Bánh hoa hồng nhật', 'Nhỏ', 500, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 420000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 1 ,'Bánh hoa linh lang', 'Nhỏ', 380, "Hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 250000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 , 'Bánh hoa kiểu Anh sang trọng', 'Nhỏ', 500, "Hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.",  330000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 , 'Bánh hoa hải đường ngũ sắc', 'Vừa', 500, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 450000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 ,'Bánh hoa thanh khiết', 'Nhỏ', 500, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 400000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 1 ,'Bánh hoa màu pastel ngọt ngào', 'Vừa', 500, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 450000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 ,'Bánh hoa xanh dịu dàng', 'Vừa', 500, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 500000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 ,'Bánh hoa tươi khoe sắc', 'Nhỏ', 450, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.","Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 380000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 , 'Bánh hoa pastel mini', 'Bé', 350, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 200000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 , 'Bánh hoa xanh trang nhã', 'Nhỏ', 500, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 , 'Bánh hoa pansy', 'Bé', 300, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 150000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 1 ,'Bánh hoa kem tươi Hàn Quốc', 'Bé', 300, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 180000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 1 ,  'Bánh hoa xinh Hàn Quốc', 'Vừa', 480, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 400000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (3 ,  'Bánh kem sữa chua xoài hảo hạng', 'Lớn', 500, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 500000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 1 , 'Bánh hoa mẫu đơn', 'Vừa', 500, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 450000, 0);

INSERT INTO PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 ,  'Bánh hoa hồng xinh xắn', 'Lớn', 500, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (  1 , 'Bánh hoa và ngọc trai', 'Nhỏ', 400, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 1 ,  'Bánh hoa tulip', 'Vừa', 500, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 3 ,'Bánh oreo việt quất', 'Nhỏ', 300, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 250000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (3 , 'Bánh kem trái cây hạnh nhân', 'Lớn', 500, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 500000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 1 ,'Bánh dâu tây bồng bềnh', 'Nhỏ', 300, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 ,'Bánh dâu tây mini', 'Bé', 250, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 150000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 , 'Bánh 2 màu trang trí hoa', 'Nhỏ', 350, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 3 ,'Bánh kem dứa caramel', 'Lớn', 500, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 550000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (3 , 'Bánh kem dứa hảo hạng', 'Lớn', 500, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.","Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 550000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 3 ,'Bánh kem sữa chua dâu tây hảo hạng', 'Lớn', 500, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 500000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (3 , 'Bánh kem mâm xôi dâu tây', 'Vừa', 500, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.","Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 , 'Bánh kem hoa hồng Pháp', 'Lớn', 550, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 550000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 ,'Bánh liên hoan lớp', 'Lớn', 600, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 600000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (3 , 'Bánh mứt việt quất', 'Lớn', 500, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (3 , 'Bánh xoài kem sữa chua', 'Vừa', 500, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (3 ,'Bánh dâu tây kem tươi trái tim', 'Bé', 250, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.",  "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 150000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (3 ,'Bánh dâu tây kem tươi', 'Bé', 250, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 150000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 1 ,'Bánh tặng ông bà', 'Vừa', 500,"Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 1 ,'Bánh vương miện và hoa hồng', 'Vừa', 450, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 ,'Bánh kem dâu tây sữa chua Hàn Quốc', 'Nhỏ', 400, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 2 ,'Bánh kem khỉ 2 tầng', 'Nhỏ', 750, "Bánh được trang trí những chiếc lá cây xanh tươi đủ sắc độ quen thuộc của núi rừng. Không chỉ vậy bánh còn có tạo hình những người bạn của rừng xanh theo phong cách chibi cực kỳ dễ thương. Màu sắc trang trí bánh được lấy từ các loại rau, củ, quả cần thiết, rửa sạch và để ráo. Rồi thái nhỏ hoặc xay nhuyễn bằng máy xay. Sau đó lọc qua rây để loại bỏ bã hoặc vắt thật mạnh để lấy nước “nhuộm”.", "Những chiếc bánh kem có hình những con thú ngộ nghĩnh làkiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 650000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 2 ,'Bánh sinh nhật bé trâu', 'Nhỏ', 400, "Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", "Những chiếc bánh kem có hình những con thú ngộ nghĩnh làkiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 350000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 2 ,'Bánh đàn vịt vàng', 'Nhỏ', 400, "Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", "Những chiếc bánh kem có hình những con thú ngộ nghĩnh làkiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 350000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (2 , 'Bánh bé thỏ và khu rừng', 'Vừa', 500, "Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.","Những chiếc bánh kem có hình những con thú ngộ nghĩnh làkiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (2 , 'Bánh chú hổ dễ thương', 'Vừa', 400, "Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", "Những chiếc bánh kem có hình những con thú ngộ nghĩnh làkiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 2 ,'Bánh chú voi dễ thương', 'Vừa', 500, "Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", "Những chiếc bánh kem có hình những con thú ngộ nghĩnh làkiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 2 ,'Bánh kem hình sư tử', 'Vừa', 500,"Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", "Những chiếc bánh kem có hình những con thú ngộ nghĩnh làkiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 2 ,'Bánh kem mặt sư tử dễ thương', 'Vừa', 500, "Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", "Những chiếc bánh kem có hình những con thú ngộ nghĩnh làkiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (2 , 'Bánh hình con sâu', 'Lớn', 400, "Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", "Những chiếc bánh kem có hình những con thú ngộ nghĩnh làkiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (2 ,'Bánh khủng long bé bỏng', 'Vừa', 500, "Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", "Những chiếc bánh kem có hình những con thú ngộ nghĩnh làkiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (2 , 'Bánh sinh nhật thỏ và gấu', 'Vừa', 500, "Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", "Những chiếc bánh kem có hình những con thú ngộ nghĩnh làkiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (4 , 'Bánh 2 tầng - thiên thần hồng', 'Lớn', 750, "Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", "Những chiếc bánh kem có hình những con thú ngộ nghĩnh là kiểu trang trí bánh kem cho bé phổ biến nhất. Nó không những đẹp mà còn đơn giản. Điểm nhấn của nó là ở cách trang trí. Chúng thường được trang trí bởi mô hình các con vật mà các bé yêu thích.", 650000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (3 ,'Bánh kem phô mai hạnh nhân', 'Lớn', 500,  "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (4 , 'Bánh công chúa Elsa', 'Vừa', 450, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", 350000, 0); 
INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (4 , 'Bánh công chúa váy trắng', 'Vừa', 450, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", 350000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (4 , 'Bánh kem Noah', 'Vừa', 450, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", 350000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 4 ,'Bánh sinh nhật Doremon', 'Vừa', 450, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", 350000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 4 ,'Bánh thiên thần tím', 'Vừa', 450, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", 350000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 , 'Bánh kỷ niệm ngày yêu nhau', 'Vừa', 450, "Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 350000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (4 , 'Bánh unicom đáng yêu', 'Vừa', 450, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", 350000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (3 ,'Combo 3 bánh mini', 'Bé', 450, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 350000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (3 , 'Bánh kem Socola cherry', 'Vừa', 450, "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", "Từ những quả trái cây tươi, chua ngọt hòa quyện với cốt bánh mềm mịn, béo ngậy.  được lựa chọn kĩ lưỡng từ những loại trái cây nhập khẩu, kết hợp với lớp kem đặc trưng béo ngọt kem và lớp bông lan mềm, tơi xốp hòa quyện lại với nhau tạo nên hương vị khó cưỡng, bạn hay mua thử ngay nhé.", 350000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 ,'Bánh maccaron sọc hồng', 'Vừa', 500,"Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 6 ,'Bánh socola kitkat', 'Vừa', 500, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 , 'Bánh sinh nhật spa', 'Vừa', 500, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.",  500000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 6 ,'Bánh socola trắng đen', 'Lớn', 500, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 ,'Bánh kem oreo và maccaron', 'Vừa', 500, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 ,'Bánh gato socola', 'Nhỏ', 450, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 380000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 , 'Bánh maccaron hoa hồng', 'Lớn', 600, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 650000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 , 'Bánh kem socola', 'Vừa', 500, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 ,'Bánh socola trắng vị chanh', 'Vừa', 500, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 ,'Bánh ombre màu cam  socola', 'Vừa', 500, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 ,'Bánh sinh nhật túi LV', 'Vừa', 500, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 , 'Bánh Happy Valentine', 'Nhỏ', 500, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (7 ,'Bánh bóng đá sôi động', 'Vừa', 500, "Sắp đến sinh nhật bè bạn hay người thân trong gia đình của bạn. Và bạn muốn khuyến mãi ngay họ một chiếc bánh lạ và đẹp nhất thì hãy tìm hiểu những mẫu bánh kem độc lạ và cũng không kém phần thích mắt của chúng tôi.", "Sắp đến sinh nhật bè bạn hay người thân trong gia đình của bạn. Và bạn muốn khuyến mãi ngay họ một chiếc bánh lạ và đẹp nhất thì hãy tìm hiểu những mẫu bánh kem độc lạ và cũng không kém phần thích mắt của chúng tôi.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (7 , 'Bánh chữ T', 'Lớn', 500, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Sắp đến sinh nhật bè bạn hay người thân trong gia đình của bạn. Và bạn muốn khuyến mãi ngay họ một chiếc bánh lạ và đẹp nhất thì hãy tìm hiểu những mẫu bánh kem độc lạ và cũng không kém phần thích mắt của chúng tôi.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (7 ,'Bánh kem hình gốc cây', 'Lớn', 500, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Sắp đến sinh nhật bè bạn hay người thân trong gia đình của bạn. Và bạn muốn khuyến mãi ngay họ một chiếc bánh lạ và đẹp nhất thì hãy tìm hiểu những mẫu bánh kem độc lạ và cũng không kém phần thích mắt của chúng tôi.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (7 , 'Bánh trái tim - in ảnh', 'Nhỏ', 400, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!","Sắp đến sinh nhật bè bạn hay người thân trong gia đình của bạn. Và bạn muốn khuyến mãi ngay họ một chiếc bánh lạ và đẹp nhất thì hãy tìm hiểu những mẫu bánh kem độc lạ và cũng không kém phần thích mắt của chúng tôi.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (7 ,'Bánh red velvet trái tim', 'Lớn', 500, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Sắp đến sinh nhật bè bạn hay người thân trong gia đình của bạn. Và bạn muốn khuyến mãi ngay họ một chiếc bánh lạ và đẹp nhất thì hãy tìm hiểu những mẫu bánh kem độc lạ và cũng không kém phần thích mắt của chúng tôi.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 7 ,'Bánh hũ vàng tài lộc', 'Vừa', 500, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Sắp đến sinh nhật bè bạn hay người thân trong gia đình của bạn. Và bạn muốn khuyến mãi ngay họ một chiếc bánh lạ và đẹp nhất thì hãy tìm hiểu những mẫu bánh kem độc lạ và cũng không kém phần thích mắt của chúng tôi.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 , 'Bánh maccaron cherry', 'Vừa', 500, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 4 ,'Bánh thiên thần bé nhỏ', 'Vừa', 500, "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 , 'Bánh socola kem tươi', 'Vừa', 450, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", "Những chiếc bánh kem ngộ nghĩnh với tạo hình những nhân vật hoạt hình xinh đẹp và độc đáo sẽ là món quà vô cùng ý nghĩa dành cho các bé yêu nhà bạn nhân dịp sinh nhật!", 350000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (1 ,'Bánh kem hoa vị xoài', 'Vừa', 500,"Bánh kem với những bông hoa tuyệt đẹp, chất lượng luôn tươi mới, nguyên liệu hoàn toàn cao cấp được chọn lọc kỹ càng, đảm bảo an toàn vệ sinh thực phẩm, bảo vệ sức khỏe cho người dùng đó chính là điều mà chúng tôi muốn mang lại cho quý khách hàng. Phần hoa của bánh sẽ được làm từ kem bơ, kem tươi tạo nên vị bánh cũng rất ấn tượng, ngọt dịu, không gây ngán. Các thợ làm bánh phải bắt từng bông hoa, để cho thật lạnh để hoa đông cứng rồi mới sắp xếp lên bánh cho hài hoà. Vì vậy cần rất nhiều thời gian, sự kiên nhẫn và cả sự khéo léo. Mỗi chiếc bánh thật sự là một tác phẩm nghệ thuật.", "Trong những dịp lễ, ngày kỷ niệm hay sinh nhật, không cần một món quà quá khoa trương, đơn giản chỉ là một chiếc bánh kem được trang trí bằng những bông hoa sắc màu, bắt mắt cũng khiến bữa tiệc trở nên lung linh mà người nhận thì vui vẻ rồi. Bánh thích hợp tặng chị gái, mẹ, cô giáo.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (5 , 'Bánh mousse chanh leo dâu tây', 'Vừa', 500, "Mousse là dòng bánh ngọt được sử dụng làm món tráng miệng hoặc ăn vặt đến từ kinh đô Pháp. Bánh gồm có 2 lớp, lớp kem ở trên là lớp kem mịn, khi ăn sẽ có vị ngọt, mát và thấm nhanh vào đầu lưỡi của người thưởng thức.", "Mousse là dòng bánh ngọt được sử dụng làm món tráng miệng hoặc ăn vặt đến từ kinh đô Pháp. Bánh gồm có 2 lớp, lớp kem ở trên là lớp kem mịn, khi ăn sẽ có vị ngọt, mát và thấm nhanh vào đầu lưỡi của người thưởng thức.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (5 , 'Bánh mousse chanh leo xoài dâu tây', 'Lớn', 500, "Mousse là dòng bánh ngọt được sử dụng làm món tráng miệng hoặc ăn vặt đến từ kinh đô Pháp. Bánh gồm có 2 lớp, lớp kem ở trên là lớp kem mịn, khi ăn sẽ có vị ngọt, mát và thấm nhanh vào đầu lưỡi của người thưởng thức.","Mousse là dòng bánh ngọt được sử dụng làm món tráng miệng hoặc ăn vặt đến từ kinh đô Pháp. Bánh gồm có 2 lớp, lớp kem ở trên là lớp kem mịn, khi ăn sẽ có vị ngọt, mát và thấm nhanh vào đầu lưỡi của người thưởng thức.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 , 'Bánh kem cầu vồng', 'Vừa', 450, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 , 'Bánh kem tươi 6 lớp', 'Vừa', 450, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 , 'Bánh kem tươi I love you', 'Vừa', 450, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 , 'Bánh kem tươi love', 'Vừa', 450, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES ( 8 ,'Bánh kem tươi mini matcha', 'Bé', 250, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 150000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 ,'Bánh kem tươi vị matcha', 'Vừa', 450, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 , 'Bánh kem vị dâu tây', 'Lớn', 500, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (5 , 'Bánh mousse xoài hạnh nhân', 'Vừa', 500, "Mousse là dòng bánh ngọt được sử dụng làm món tráng miệng hoặc ăn vặt đến từ kinh đô Pháp. Bánh gồm có 2 lớp, lớp kem ở trên là lớp kem mịn, khi ăn sẽ có vị ngọt, mát và thấm nhanh vào đầu lưỡi của người thưởng thức.","Mousse là dòng bánh ngọt được sử dụng làm món tráng miệng hoặc ăn vặt đến từ kinh đô Pháp. Bánh gồm có 2 lớp, lớp kem ở trên là lớp kem mịn, khi ăn sẽ có vị ngọt, mát và thấm nhanh vào đầu lưỡi của người thưởng thức.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 , 'Bánh red velvet bướm', 'Vừa', 500, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 ,'Bánh sinh nhật bé trai kiểu Hàn Quốc', 'Vừa', 500, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 450000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 ,'Bánh kem whip dâu tây', 'Vừa', 450, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 , 'Bánh kem Hàn Quốc', 'Vừa', 450, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 300000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 , 'Bánh kem red velvet', 'Vừa', 450, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (8 , 'Bánh kem phủ socola trắng', 'Vừa', 450, "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", "Ngày càng nhiều kiểu dáng, mẫu mã cùng sự pha trộn màu sắc bánh kem ra đời để phục vụ nhiều nhu cầu khác nhau của khách hàng. Có những người thích chiếc bánh sinh nhật lồng lộn, kiểu cách tỉ mỉ thì cũng sẽ có những người yêu chiếc bánh sinh nhật đơn giản, mộc mạc nhưng cũng không kém phần ý nghĩa và đẹp mắt.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 , 'Bánh kem caramel socola', 'Vừa', 450, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 400000, 0);

INSERT INTO  PRODUCTS(ID_TYPE, NAME, SIZE, WEIGHT, DESCRIPTION, INTRODUCTION, PRICE, STATUS) VALUES (6 ,'Bánh kem chery kem tươi', 'Vừa', 450, "Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.","Socola là sở thích của rất nhiều người. Một chiếc bánh gato kem socola chắc chắn sẽ vô cùng hấp dẫn với cả người. Với những bạn thích socola thì 1 chiếc bánh kém sinh nhật socola hoặc maccaron sẽ rất ý nghĩa trong ngày Sinh nhật.", 400000, 0);


/*==============================discounts=====================================*/
create table discounts( ID int AUTO_INCREMENT PRIMARY KEY,
                        ID_PRODUCT int,
                        discount DOUBLE,
                        startDate datetime,
                        expiryDate datetime,
                        CONSTRAINT f_mk FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCTS(ID));
insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate)  values(5, 0.2, '2022/12/11', '2024/12/20');
insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate) values( 7, 0.3, '2022/12/11', '2024/12/20');
insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate) values( 98, 0.5, '2022/12/11', '2024/12/20');
insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate) values( 96, 0.1, '2022/12/11', '2024/12/20');
insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate) values( 18, 0.3, '2022/12/11', '2024/12/20');
insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate) values( 15, 0.2, '2022/12/11', '2024/12/20');
insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate) values( 76, 0.4, '2022/12/11', '2024/12/20');
insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate) values( 67, 0.5, '2022/12/11', '2024/12/20');
insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate) values( 93, 0.1, '2022/12/11', '2024/12/20');
insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate) values( 3, 0.05, '2022/12/11', '2024/12/20');
insert into discounts(ID_PRODUCT, discount, startDATE, expiryDate) values( 35, 0.3, '2022/12/11', '2024/12/20');


/*==============================ANH SP=====================================*/

CREATE table productIMGs ( ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, ID_PRODUCT INT not null, IMG varchar(40), STATUS TINYINT(10), CONSTRAINT f_msp FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCTS(ID));

-- --

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(1,'img/product/B001/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(1,'img/product/B001/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(1,'img/product/B001/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(1,'img/product/B001/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(2,'img/product/B002/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(2,'img/product/B002/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(2,'img/product/B002/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(2,'img/product/B002/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(3,'img/product/B003/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(3,'img/product/B003/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(3,'img/product/B003/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(3,'img/product/B003/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(4,'img/product/B004/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(4,'img/product/B004/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(4,'img/product/B004/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(5,'img/product/B005/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(5,'img/product/B005/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(5,'img/product/B005/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(6,'img/product/B006/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(6,'img/product/B006/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(6,'img/product/B006/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(7,'img/product/B007/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(7,'img/product/B007/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(7,'img/product/B007/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(8,'img/product/B008/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(8,'img/product/B008/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(8,'img/product/B008/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(9,'img/product/B009/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(9,'img/product/B009/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(9,'img/product/B009/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(9,'img/product/B009/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(10,'img/product/B010/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(10,'img/product/B010/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(10,'img/product/B010/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(10,'img/product/B010/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(11,'img/product/B011/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(11,'img/product/B011/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(11,'img/product/B011/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(11,'img/product/B011/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(12,'img/product/B012/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(12,'img/product/B012/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(12,'img/product/B012/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(13,'img/product/B013/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(13,'img/product/B013/banh2.jpg', 0);


INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(14,'img/product/B014/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(14,'img/product/B014/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(14,'img/product/B014/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(15,'img/product/B015/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(15,'img/product/B015/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(15,'img/product/B015/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(16,'img/product/B016/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(16,'img/product/B016/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(16,'img/product/B016/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(16,'img/product/B016/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(17,'img/product/B017/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(17,'img/product/B017/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(17,'img/product/B017/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(17,'img/product/B017/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(18,'img/product/B018/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(18,'img/product/B018/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(18,'img/product/B018/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(18,'img/product/B018/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(19,'img/product/B019/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(19,'img/product/B019/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(19,'img/product/B019/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(20,'img/product/B020/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(20,'img/product/B020/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(20,'img/product/B020/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(20,'img/product/B020/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(21,'img/product/B021/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(21,'img/product/B021/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(21,'img/product/B021/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(22,'img/product/B022/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(22,'img/product/B022/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(22,'img/product/B022/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(22,'img/product/B022/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(23,'img/product/B023/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(23,'img/product/B023/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(23,'img/product/B023/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(23,'img/product/B023/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(24,'img/product/B024/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(24,'img/product/B024/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(24,'img/product/B024/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(25,'img/product/B025/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(25,'img/product/B025/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(25,'img/product/B025/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(26,'img/product/B026/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(26,'img/product/B026/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(26,'img/product/B026/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(26,'img/product/B026/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(27,'img/product/B027/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(27,'img/product/B027/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(27,'img/product/B027/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(27,'img/product/B027/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(28,'img/product/B028/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(28,'img/product/B028/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(28,'img/product/B028/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(29,'img/product/B029/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(29,'img/product/B029/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(29,'img/product/B029/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(30,'img/product/B030/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(30,'img/product/B030/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(30,'img/product/B030/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(31,'img/product/B031/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(31,'img/product/B031/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(31,'img/product/B031/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(31,'img/product/B031/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(32,'img/product/B032/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(32,'img/product/B032/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(32,'img/product/B032/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(32,'img/product/B032/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(33,'img/product/B033/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(33,'img/product/B033/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(33,'img/product/B033/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(34,'img/product/B034/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(34,'img/product/B034/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(34,'img/product/B034/banh3.jpg', 0);


INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(35,'img/product/B035/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(35,'img/product/B035/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(35,'img/product/B035/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(35,'img/product/B035/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(36,'img/product/B036/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(36,'img/product/B036/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(36,'img/product/B036/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(36,'img/product/B036/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(37,'img/product/B037/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(37,'img/product/B037/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(37,'img/product/B037/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(37,'img/product/B037/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(38,'img/product/B038/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(38,'img/product/B038/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(38,'img/product/B038/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(38,'img/product/B038/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(39,'img/product/B039/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(39,'img/product/B039/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(39,'img/product/B039/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(39,'img/product/B039/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(40,'img/product/B040/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(40,'img/product/B040/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(40,'img/product/B040/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(40,'img/product/B040/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(41,'img/product/B041/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(41,'img/product/B041/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(41,'img/product/B041/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(41,'img/product/B041/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(42,'img/product/B042/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(42,'img/product/B042/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(42,'img/product/B042/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(42,'img/product/B042/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(43,'img/product/B043/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(43,'img/product/B043/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(43,'img/product/B043/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(44,'img/product/B044/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(44,'img/product/B044/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(44,'img/product/B044/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(45,'img/product/B045/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(45,'img/product/B045/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(45,'img/product/B045/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(46,'img/product/B046/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(46,'img/product/B046/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(46,'img/product/B046/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(47,'img/product/B047/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(47,'img/product/B047/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(47,'img/product/B047/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(47,'img/product/B047/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(48,'img/product/B048/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(48,'img/product/B048/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(48,'img/product/B048/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(49,'img/product/B049/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(49,'img/product/B049/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(49,'img/product/B049/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(50,'img/product/B050/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(50,'img/product/B050/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(50,'img/product/B050/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(51,'img/product/B051/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(51,'img/product/B051/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(51,'img/product/B051/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(52,'img/product/B052/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(52,'img/product/B052/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(52,'img/product/B052/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(52,'img/product/B052/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(53,'img/product/B053/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(53,'img/product/B053/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(53,'img/product/B053/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(53,'img/product/B053/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(54,'img/product/B054/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(54,'img/product/B054/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(54,'img/product/B054/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(54,'img/product/B054/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(55,'img/product/B055/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(55,'img/product/B055/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(55,'img/product/B055/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(55,'img/product/B055/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(56,'img/product/B056/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(56,'img/product/B056/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(56,'img/product/B056/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(57,'img/product/B057/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(57,'img/product/B057/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(57,'img/product/B057/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(58,'img/product/B058/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(58,'img/product/B058/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(58,'img/product/B058/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(58,'img/product/B058/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(59,'img/product/B059/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(59,'img/product/B059/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(59,'img/product/B059/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(59,'img/product/B059/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(60,'img/product/B060/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(60,'img/product/B060/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(60,'img/product/B060/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(60,'img/product/B060/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(61,'img/product/B061/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(61,'img/product/B061/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(61,'img/product/B061/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(62,'img/product/B062/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(62,'img/product/B062/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(62,'img/product/B062/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(62,'img/product/B062/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(63,'img/product/B063/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(63,'img/product/B063/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(63,'img/product/B063/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(63,'img/product/B063/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(64,'img/product/B064/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(64,'img/product/B064/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(64,'img/product/B064/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(64,'img/product/B064/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(65,'img/product/B065/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(65,'img/product/B065/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(65,'img/product/B065/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(66,'img/product/B066/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(66,'img/product/B066/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(66,'img/product/B066/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(67,'img/product/B067/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(67,'img/product/B067/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(67,'img/product/B067/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(67,'img/product/B067/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(68,'img/product/B068/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(68,'img/product/B068/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(68,'img/product/B068/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(69,'img/product/B069/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(69,'img/product/B069/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(69,'img/product/B069/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(69,'img/product/B069/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(70,'img/product/B070/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(70,'img/product/B070/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(70,'img/product/B070/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(71,'img/product/B071/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(71,'img/product/B071/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(71,'img/product/B071/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(72,'img/product/B072/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(72,'img/product/B072/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(72,'img/product/B072/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(73,'img/product/B073/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(73,'img/product/B073/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(73,'img/product/B073/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(74,'img/product/B074/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(74,'img/product/B074/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(74,'img/product/B074/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(75,'img/product/B075/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(75,'img/product/B075/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(75,'img/product/B075/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(75,'img/product/B075/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(76,'img/product/B076/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(76,'img/product/B076/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(76,'img/product/B076/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(77,'img/product/B077/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(77,'img/product/B077/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(77,'img/product/B077/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(78,'img/product/B078/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(78,'img/product/B078/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(78,'img/product/B078/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(78,'img/product/B078/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(79,'img/product/B079/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(79,'img/product/B079/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(79,'img/product/B079/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(79,'img/product/B079/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(80,'img/product/B080/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(80,'img/product/B080/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(80,'img/product/B080/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(80,'img/product/B080/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(81,'img/product/B081/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(81,'img/product/B081/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(81,'img/product/B081/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(81,'img/product/B081/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(82,'img/product/B082/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(82,'img/product/B082/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(82,'img/product/B082/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(82,'img/product/B082/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(83,'img/product/B083/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(83,'img/product/B083/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(83,'img/product/B083/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(84,'img/product/B084/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(84,'img/product/B084/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(84,'img/product/B084/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(85,'img/product/B085/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(85,'img/product/B085/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(85,'img/product/B085/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(86,'img/product/B086/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(86,'img/product/B086/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(86,'img/product/B086/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(87,'img/product/B087/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(87,'img/product/B087/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(87,'img/product/B087/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(88,'img/product/B088/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(88,'img/product/B088/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(88,'img/product/B088/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(89,'img/product/B089/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(89,'img/product/B089/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(89,'img/product/B089/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(90,'img/product/B090/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(90,'img/product/B090/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(90,'img/product/B090/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(91,'img/product/B091/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(91,'img/product/B091/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(91,'img/product/B091/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(91,'img/product/B091/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(92,'img/product/B092/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(92,'img/product/B092/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(92,'img/product/B092/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(92,'img/product/B092/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(93,'img/product/B093/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(93,'img/product/B093/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(93,'img/product/B093/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(93,'img/product/B093/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(94,'img/product/B094/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(94,'img/product/B094/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(94,'img/product/B094/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(95,'img/product/B095/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(95,'img/product/B095/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(95,'img/product/B095/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(95,'img/product/B095/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(96,'img/product/B096/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(96,'img/product/B096/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(96,'img/product/B096/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(96,'img/product/B096/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(97,'img/product/B097/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(97,'img/product/B097/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(97,'img/product/B097/banh3.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(97,'img/product/B097/banh4.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(98,'img/product/B098/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(98,'img/product/B098/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(98,'img/product/B098/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(99,'img/product/B099/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(99,'img/product/B099/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(99,'img/product/B099/banh3.jpg', 0);

INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(100,'img/product/B100/banh1.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(100,'img/product/B100/banh2.jpg', 0);
INSERT INTO productIMGs(ID_PRODUCT, IMG, STATUS)  VALUES(100,'img/product/B100/banh3.jpg', 0);

/*=========================================USERS=========================================*/
CREATE TABLE USERS(ID int AUTO_INCREMENT NOT NULL  PRIMARY KEY not null,
                      EMAIL VARCHAR(255),
                      PASS VARCHAR(255),
                      NAME VARCHAR(100),
											ADDRESS VARCHAR(100),
											PHONE VARCHAR(10),
                      ROLE tinyint(4) NOT NULL DEFAULT 0,
                      STATUS tinyint(4) DEFAULT 0);
											
INSERT INTO USERS VALUES(1, 'hoaitin@gmail,com',  'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'Hoài Tín','TPHCM', '0988383484', 2,0);
INSERT INTO USERS VALUES(2, 'thanhtam@gmail.com', 'b3a8e0e1f9ab1bfe3a36f231f676f78bb30a519d2b21e6c530c0eee8ebb4a5d0', 'Thanh Tâm','Đồng Nai','0898427821', 2,0);

/*==============================BILLS=====================================*/
CREATE TABLE BILLS(ID INT  PRIMARY KEY,
                   USER_ID int,
                   EXPORT_DATE DATETIME NOT NULL,
                   NOTES LONGTEXT,
                   PRO_BILL FLOAT,
                   FEE_BILL FLOAT,
                   STATUS int DEFAULT 0,
                   CONSTRAINT f_kh FOREIGN KEY (USER_ID) REFERENCES USERS(ID));
									 
/*==============================BILL_DETAIL=====================================*/
CREATE TABLE BILL_DETAIL(ID INT,
                         ID_PRODUCT int,
                         AMOUNT INT,
                         NOTES LONGTEXT,
                         PRICE int,
                         CONSTRAINT f_mhdcthd FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCTS(ID),
                         CONSTRAINT f_mspcthd FOREIGN KEY (ID) REFERENCES BILLS(ID));
/*=========================================Comments=========================================*/
CREATE table COMMENTS(ID INT PRIMARY KEY AUTO_INCREMENT,ID_PRODUCT int not null, USER_ID INT not null , COMMENT longtext, DATE datetime, STATUS tinyint(4) DEFAULT 0);
ALTER TABLE COMMENTS
ADD CONSTRAINT fk_product FOREIGN KEY (ID_PRODUCT) REFERENCES products(ID),
ADD CONSTRAINT fk_user FOREIGN KEY (USER_ID) REFERENCES USERS(ID);


