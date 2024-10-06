#include <stdio.h> 
#include <unistd.h>  /* contains fork prototype */ 
#include<sys/types.h>
#include<sys/wait.h>
int a[25]={0};


int main() {
int i=1;
pid_t p1,p2,p3;
int p;
p=getpid();
a[i]=getpid();
p1=fork();
int j=2*i;
if(p1==0)j++;
a[j]=getpid();  
p2=fork( ); 
int k=2*j;
if(p2==0)k++;
a[k]=getpid();
p3=fork( );
int l=2*k;
if(p3==0)l++;
a[l]=getpid();
waitpid(p1, NULL, 0);
waitpid(p2, NULL, 0);
waitpid(p3, NULL, 0);

    
while(wait(NULL)>0);

for(int i=0;i<25;i++){
  if(a[i]!=0) printf("%d %d \n",i,a[i]);
}

return 0;
}
