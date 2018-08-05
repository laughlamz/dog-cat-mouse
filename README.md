This is just a project how to use git

git init
git status
git add README.md
	-> mở rộng thêm thì có git add . : để git add toàn bộ document trong folder			
git commit:	đóng gói những gì đã dùng trong git add
	git commit -m 'Add README file': -m là viết mô tả, sau đó là 'value' cần mô tả
	-> để ng khác nhìn vào và mình sau này biết là đã  commit những gì
- Cài git lần đầu nó sẽ yêu cầu:
	git config --global user.email "laughlamz@gmail.com"
	git config --global user.name "Son"
git commit -m "Add README file" lại
	-> 1 file changed, 1 insertion
	   create mode .. README.md
	-> git status: lại thì
		-> On branch master
		   nothing to commit, working tree clean
		   -> Nghĩa là: không có gì để commit, working tree nó clean